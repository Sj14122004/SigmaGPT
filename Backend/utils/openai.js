import "dotenv/config";

const getOpenAIAPIResponse = async (message) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: message
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        console.log("Gemini status:", response.status);

        if (!response.ok) {
            console.log("Gemini response:", data);

            throw new Error(
                data?.error?.message || "Gemini API request failed"
            );
        }

        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!reply) {
            console.log("Gemini returned:", data);
            throw new Error("Gemini did not return a response");
        }

        return reply;

    } catch (err) {
        console.log("Gemini Error:", err);
        throw err;
    }
};

export default getOpenAIAPIResponse;