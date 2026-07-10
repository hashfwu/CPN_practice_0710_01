# Canvas & Co. — Art Store

Static site for a fictional art store. Built with HTML, CSS & vanilla JS.

## Deploy to Azure Static Web Apps

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/<TU_USER>/<TU_REPO>.git
git push -u origin main
```

### 2. Create Azure Static Web App

**Option A — Portal (manual)**
1. Ir a [portal.azure.com](https://portal.azure.com) → "Create a resource" → "Static Web App"
2. Conectar tu repo de GitHub
3. Build presets: **HTML** (sin framework)
4. App location: `/` · Output location: `/`
5. Crear → en minutos tendrás la URL

**Option B — Azure CLI**
```bash
az staticwebapp create \
  --name canvas-and-co \
  --resource-group myResourceGroup \
  --source /ruta/local/art-store \
  --branch main \
  --location eastus \
  --app-location /
```

### 3. Cada `git push` hace deploy automático 🚀
