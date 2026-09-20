# 上传到 GitHub Pages

此文件夹是可直接发布的静态单页网站。`index.html`、`style.css`、`script.js`、图片和证明材料必须保持在同一层级。

## 推荐方法：GitHub Pages 从分支发布

1. 在 GitHub 新建一个公开或私有仓库。
2. 将本文件夹内的全部文件上传到仓库根目录。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 分支选择 `main`，目录选择 `/ (root)`，然后保存。
6. 等待 GitHub 生成网站地址。

## 使用 deploy-pages.yml

GitHub 只识别 `.github/workflows/` 目录中的工作流文件。若要使用附带的自动部署配置：

1. 在仓库中新建 `.github/workflows` 文件夹。
2. 将根目录的 `deploy-pages.yml` 移动到 `.github/workflows/deploy-pages.yml`。
3. 在 **Settings → Pages → Build and deployment** 中选择 **GitHub Actions**。
4. 推送或重新上传文件后，等待 Actions 完成。

## 上传前提醒

网站包含姓名、学校、邮箱、电话号码、个人照片及证明材料。公开仓库和公开 GitHub Pages 会让任何人都能访问这些内容。若不希望公开电话号码或证明文件，请在上传前从 `index.html` 删除相应信息，并移除对应 PDF。
