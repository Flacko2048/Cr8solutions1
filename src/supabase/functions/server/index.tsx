import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2.49.8";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-88fc5984/health", (c) => {
  return c.json({ status: "ok" });
});

// Form submission endpoint
app.post("/make-server-88fc5984/submit-booking", async (c) => {
  try {
    const body = await c.req.json();
    
    // Create Supabase client with service role key for server-side operations
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    // Insert the booking form data into the bookings table
    const { data, error } = await supabase
      .from("bookings")
      .insert([
        {
          business_email: body.businessEmail,
          country_code: body.countryCode,
          phone_number: body.phoneNumber,
          website: body.website,
          company_name: body.companyName,
          can_afford: body.canAfford,
          current_problem: body.currentProblem,
          solve_by: body.solveBy,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.log("Error inserting booking:", error);
      return c.json({ success: false, error: error.message }, 500);
    }

    console.log("Booking submitted successfully:", data);
    return c.json({ success: true, data });
  } catch (error) {
    console.log("Error processing booking submission:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

// Newsletter subscription endpoint
app.post("/make-server-88fc5984/subscribe-newsletter", async (c) => {
  try {
    const body = await c.req.json();
    
    // Create Supabase client with service role key for server-side operations
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    );

    // Insert the email into the newsletter_subscribers table
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert([
        {
          email: body.email,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.log("Error subscribing to newsletter:", error);
      // specific error for unique constraint violation could be nice, but general error is fine
      return c.json({ success: false, error: error.message }, 500);
    }

    console.log("Newsletter subscription successful:", data);
    return c.json({ success: true, data });
  } catch (error) {
    console.log("Error processing newsletter subscription:", error);
    return c.json({ success: false, error: String(error) }, 500);
  }
});

Deno.serve(app.fetch);