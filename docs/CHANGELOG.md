# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

#### Documentation
- **Sitemap**: Created `docs/sitemap.md` featuring a Mermaid diagram of the full platform architecture (Public, Auth, Dashboard, CRM, Admin).

#### Page Structure & Placeholders
Created the following placeholder components to match the new site architecture:

- **Public Services**:
  - `pages/services/WebApplications.tsx`
  - `pages/services/SocialMedia.tsx`
  - `pages/services/Ecommerce.tsx`

- **Core Company Pages**:
  - `pages/TechStack.tsx`
  - `pages/Resources.tsx`

- **Legal**:
  - `pages/legal/PrivacyPolicy.tsx`
  - `pages/legal/TermsOfService.tsx`

- **Authentication**:
  - `pages/auth/Login.tsx`

- **Admin Console**:
  - `pages/admin/AdminDashboard.tsx`

- **Dashboard System**:
  - `pages/dashboard/Overview.tsx`
  - `pages/dashboard/Briefs.tsx`
  - `pages/dashboard/Projects.tsx`
  - `pages/dashboard/Tasks.tsx`
  - `pages/dashboard/Calendar.tsx`
  - `pages/dashboard/Clients.tsx`
  - `pages/dashboard/Financials.tsx`
  - `pages/dashboard/Settings.tsx`
  - `pages/dashboard/Support.tsx`

- **CRM Module (Dashboard Sub-section)**:
  - `pages/dashboard/crm/Prospecting.tsx`
  - `pages/dashboard/crm/Leads.tsx`
  - `pages/dashboard/crm/Pipeline.tsx`
  - `pages/dashboard/crm/Outreach.tsx`
  - `pages/dashboard/crm/Scoring.tsx`

- **Utilities**:
  - `pages/NotFound.tsx` (404 Error Page)

### Architecture
- Established a nested directory structure in `pages/` to support future routing implementation:
  - `/services`
  - `/legal`
  - `/auth`
  - `/dashboard`
  - `/dashboard/crm`
  - `/admin`
