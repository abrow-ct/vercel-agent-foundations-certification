/**
 * This is where your agent will live.
 *
 * During the workshop you'll define a `ToolLoopAgent` here, give it a model
 * and instructions, and later add tools (web search, sandbox, etc.). The
 * route handler in `app/api/chat/route.ts` and the `useChat` call in
 * `components/agent-chat.tsx` will both import from this file.
 *
 * Workshop docs: https://agent-foundations-certification.vercel.app/docs/chat-agent
 */
import { ToolLoopAgent } from "ai";
import { searchProducts } from "@/lib/tools";

export const shoppingAgent = new ToolLoopAgent({ 
    model: "anthropic/claude-sonnet-5",
    instructions: `You are a helpful assistant for the Vercel swag store. When the user asks about products, availability, or 
    recommendations, use the searchProducts tool to look up real catalog data before answering.`,
  tools: { searchProducts },
});
