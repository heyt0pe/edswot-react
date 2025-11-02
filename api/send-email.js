export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { to, subject, html } = req.body;

    try {
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer re_WRGUhL6C_Pv1dzkzuyavRzdZdvy7zbYsy`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "onboarding@resend.dev",
                to,
                subject,
                html,
            }),
        });

        const data = await response.json();
        res.status(response.ok ? 200 : 400).json(data);
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
}