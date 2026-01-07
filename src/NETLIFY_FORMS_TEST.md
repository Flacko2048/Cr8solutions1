# ✅ Netlify Forms Test Checklist

## After you deploy to Netlify, follow these steps:

### Step 1: Check Form Detection
1. Go to Netlify Dashboard
2. Select your site
3. Click **"Forms"** in the left sidebar
4. You should see two forms listed:
   - ✓ `booking`
   - ✓ `newsletter`

**If forms don't appear:** Wait 2-3 minutes after deployment, then refresh. Netlify scans for forms during build.

---

### Step 2: Test Newsletter Form
1. Go to your live site footer
2. Enter a test email: `test@example.com`
3. Click **"Join"**
4. You should see: "✓ Thank you for subscribing!"
5. Go to Netlify Dashboard → Forms → newsletter
6. Your test submission should appear there

---

### Step 3: Test Booking Form
1. Click any "Book a Call" or "Get Started" button on your site
2. Fill out the booking modal completely
3. Click **"Submit"**
4. You should see: "✓ Thank you! We will contact you within 48 hours."
5. Go to Netlify Dashboard → Forms → booking
6. Your test submission should appear with all fields filled

---

### Step 4: Enable Email Notifications
1. Netlify Dashboard → Site Settings → Forms
2. Click **"Form notifications"**
3. Click **"Add notification"**
4. Select **"Email notification"**
5. Add your email address
6. Choose which form (or "all forms")
7. Click **"Save"**

Now you'll get instant emails when someone submits!

---

## Common Issues & Fixes

### ❌ Forms not appearing in Netlify Dashboard
**Fix:** Make sure you deployed AFTER adding the hidden forms to `/index.html`. Redeploy if needed.

### ❌ Getting 404 error on submit
**Fix:** The forms need the `name` attribute to match exactly. Check:
- React form has: `name="newsletter"` or `name="booking"`
- Hidden HTML form has: `name="newsletter"` or `name="booking"`

### ❌ Form submits but data is empty
**Fix:** Make sure all inputs have the `name` attribute:
```html
<input name="email" ... />  ← name attribute required!
```

### ❌ "Submissions quota exceeded"
**Fix:** Free plan = 100 submissions/month. Upgrade to Pro ($19/mo) for 1,000 submissions.

---

## 🎯 What to Do Next

1. ✅ Test both forms on live site
2. ✅ Verify submissions appear in Netlify Dashboard
3. ✅ Set up email notifications
4. ✅ (Optional) Set up Slack webhook for instant alerts
5. ✅ Test spam filter by submitting obvious fake data

---

## 📧 Viewing Your Submissions

**In Netlify Dashboard:**
- Click **"Forms"** → Select form name
- See all submissions with timestamps
- Click any submission to view full details
- Export as CSV for spreadsheet analysis
- Mark as read/spam
- Search and filter

**Via Email:**
- You'll get notification within seconds
- Includes all form data
- Includes submitter's IP (for spam detection)

---

## Need More Help?

If forms still don't work after following this checklist:
1. Check browser console for errors (F12 → Console tab)
2. Try in incognito/private browsing mode
3. Check Netlify deploy logs for errors
4. Netlify docs: https://docs.netlify.com/forms/setup/

---

**Your forms are ready! 🚀**
Deploy and test using this checklist.
