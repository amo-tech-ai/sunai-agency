# Site Map

```mermaid
graph TD
    A[SunAI Platform] --> B[Public Pages]
    A --> C[Authentication]
    A --> D[Dashboard]
    A --> E[Admin]
    A --> F[Utility Routes]
    
    B --> B1[Homepage /]
    B --> B2[Services]
    B --> B3[Core Pages]
    B --> B4[Legal Pages]
    
    B2 --> B2a[/services/web-applications]
    B2 --> B2b[/services/social-media]
    B2 --> B2c[/services/ecommerce]
    B2 --> B2d[/services/whatsapp-automation]
    
    B3 --> B3a[/process]
    B3 --> B3b[/projects]
    B3 --> B3c[/tech-stack]
    B3 --> B3d[/resources]
    B3 --> B3e[/about]
    B3 --> B3f[/contact]
    
    B4 --> B4a[/privacy-policy]
    B4 --> B4b[/terms-of-service]
    
    C --> C1[/login]
    
    D --> D1[Overview /dashboard/overview]
    D --> D2[Briefs Management]
    D --> D3[Projects /dashboard/projects]
    D --> D4[Sales CRM]
    D --> D5[System Pages]
    
    D2 --> D2a[/dashboard/briefs]
    D2 --> D2b[/dashboard/briefs/:briefId]
    
    D4 --> D4a[/dashboard/prospecting]
    D4 --> D4b[/dashboard/leads]
    D4 --> D4c[/dashboard/leads/:leadId]
    D4 --> D4d[/dashboard/pipeline]
    D4 --> D4e[/dashboard/outreach]
    D4 --> D4f[/dashboard/scoring]
    
    D5 --> D5a[/dashboard/tasks]
    D5 --> D5b[/dashboard/calendar]
    D5 --> D5c[/dashboard/clients]
    D5 --> D5d[/dashboard/financials]
    D5 --> D5e[/dashboard/settings]
    D5 --> D5f[/dashboard/settings/integrations]
    D5 --> D5g[/dashboard/support]
    
    E --> E1[/admin/dashboard]
    
    F --> F1[/brief/:briefId]
    F --> F2[404 Not Found]
```
