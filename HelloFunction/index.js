export async function handler(context, req) {
    const name = req.query.name || (req.body && req.body.name) || "world";
    context.res = {
        status: 200,
        body: `Hello, ${name}! This is an Azure Function running Node.js 22.`,
    };
}
