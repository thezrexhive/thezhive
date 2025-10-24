
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DiscussServiceClient } from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';

admin.initializeApp();

const MODEL_NAME = 'models/chat-bison-001';
const API_KEY = process.env.GEMINI_API_KEY;

export const generateBlueprint = functions.https.onCall(async (data, context) => {
  if (!API_KEY) {
    throw new functions.https.HttpsError('invalid-argument', 'Gemini API key not set.');
  }

  const client = new DiscussServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
  });

  const blueprint = data.blueprint;

  const result = await client.generateMessage({
    model: MODEL_NAME,
    prompt: {
      messages: [
        { content: 'You are an energetic, collaborative, and results-oriented Senior Strategist from The ZRex Hive. All output must be professional, actionable, and use the specified tone.' },
        { content: JSON.stringify(blueprint) }
      ],
    },
  });

  if (result[0]?.candidates && result[0]?.candidates.length > 0) {
    return { blueprint: JSON.parse(result[0].candidates[0].content) };
  } else {
    throw new functions.https.HttpsError('internal', 'No content generated');
  }
});
