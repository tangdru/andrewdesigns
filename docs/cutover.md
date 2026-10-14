# Cutover: Squarespace → GitHub Pages

## 1. Turn on GitHub Pages (one time)

Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
Every push to `master` then builds and deploys. Until step 3, the site is at
https://tangdru.github.io/andrewdesigns/ (the workflow builds with that base
path automatically).

## 2. Review the preview

Check every page against the live Squarespace site. Squarespace stays live
and untouched until step 4.

## 3. Point the domain here

The domain is registered at Squarespace (migrated from Google Domains).

1. In Squarespace **Domains → andrewdesigns.info → DNS**, screenshot every
   record first, especially any MX/SPF/DKIM email records. Keep those.
2. A day ahead, lower the TTL on the records you will change.
3. Add the custom domain to the repo: create `public/CNAME` containing
   `www.andrewdesigns.info` and push. (The workflow switches the base path
   to `/` when this file exists.) Then in **Settings → Pages → Custom
   domain**, enter `www.andrewdesigns.info`.
4. In Squarespace DNS, remove the Squarespace website records for `www` and
   the apex (`@`), and add:
   - `www` CNAME → `tangdru.github.io`
   - `@` A records → the four GitHub Pages IPs listed at
     https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
5. Wait for DNS, then tick **Enforce HTTPS** in Settings → Pages.

## 4. Cancel the Squarespace website plan, keep the domain

- Confirm the domain is billed separately and auto-renew is on before
  cancelling the **website** subscription. Do not cancel the domain.
- Make sure the domain's registrant email is one you read.

## Rollback

Restore the DNS records from your screenshots; Squarespace serves the old
site again as long as the website plan is active.
