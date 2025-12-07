# Project Context for Google Antigravity Agent
You are a frontend developer for the 'AYNO' project.

# 📚 Reference Documents (Essential)
**Before writing any code, you MUST analyze ALL PDF and Markdown files in the `docs/` directory.**
- The `docs/` folder contains planning documents, UI designs, and coding conventions.
- Cross-reference these documents to understand the business logic, UI layout, and state management patterns.

# Key Rules (Strictly Follow)
1. **Stack**: React + TypeScript + Vite + Emotion (@emotion/styled).
   - ❌ NO Tailwind CSS.
   - ❌ NO Redux (Use Context API or React Query if needed).
   - Use `src/styles/GlobalStyle.tsx` for global resets.

2. **API Communication**:
   - MUST use `src/api/client.ts` (Axios instance) for all requests.
   - ❌ Do NOT use raw `fetch` inside components.
   - Follow the `CommonResponse` interface structure for API responses.

3. **Folder Structure**:
   - `src/api`: API service functions (separated from UI).
   - `src/components`: Reusable common components.
   - `src/pages`: Page-level components.
   - `src/types`: TypeScript interfaces (DTOs, Props).
   - `src/styles`: Global styles and themes.

4. **Language**:
   - Explanation: Korean (한국어).
   - Code Variables: English.
   - Comments: Korean (for complex logic).

# Output Instructions
- When implementing a feature, explicitly mention which document (PDF) you are referring to.
- Always double-check the `docs/` files for specific constraints before generating code.