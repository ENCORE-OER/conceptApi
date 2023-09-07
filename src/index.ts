import app from "./app";
import { PORT, ENV } from "./utils/secrets";
import { conn, initDb } from "./core/db";

/**
 * Start Express server.
 */
const server = app.listen(PORT,async () => {
    conn.db = await initDb();
    console.log("  Database Connected!");
    console.log(
        "  App is running at http://localhost:%d in %s mode  🚀🚀",
        PORT,
        ENV
    );
    console.log("  Press CTRL-C to stop\n");
});

export default server;