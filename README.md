# AFUHSD Governing Board Policy Tracker

A public-facing dashboard that tracks changes to Agua Fria Union High School District Governing Board Policies. Updated weekly via automated scraping.

## 📊 Dashboard Features

- **Dashboard View** – Browse all current policies, with indicators for added, removed, reinstated, corrected, or changed text
- **Modal Viewer** – Click a policy to view its full content
- **Admin Page** – Password-protected access for changelog downloads and JSON management
- **About Page** – Information on data source, transparency goals, and update process

## 🔁 Data Source

- Pulled from: [BoardPolicyOnline – Agua Fria](https://www.boardpolicyonline.com/bl/?b=agua_fria)
- Policy content is hashed and compared against previous versions to detect:
  - ✅ No Change
  - 📝 Changed
  - ➕ Added
  - ➖ Removed
  - 🔁 Reinstated
  - ⚠️ Corrected (in case of prior load failure)

## 👥 Audience

- AFUHSD staff and union members
- Community stakeholders
- Public visitors interested in policy updates

## ⚠️ Disclaimer

This dashboard is provided for informational purposes only.  
For the official language and legally binding version of any policy, please refer to the district's [BoardPolicyOnline portal](https://www.boardpolicyonline.com/bl/?b=agua_fria).

---
