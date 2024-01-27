# Git Commands for Creating a GitHub Repository

## Steps

1. **Create a Repo in GitHub:**
   Create a new repository on GitHub.

2. **Initialize Local Repository:**
   ```bash
   git init .
   ```

3. **Change Branch to Main:**
   ```bash
   git branch -M main
   ```

4. **Add Remote Repository:**
   ```bash
   git remote add origin [repository_link.git]
   ```
   Replace `[repository_link.git]` with the actual link to your GitHub repository.

5. **Stage Local Changes:**
   ```bash
   git add .
   ```

6. **Commit Changes:**
   ```bash
   git commit -m "Initial commit"
   ```

7. **Push to GitHub:**
   ```bash
   git push -u origin main
   ```

These commands assume that you have already set up your SSH keys or configured your Git credentials. Replace `[repository_link.git]` with the actual link to your GitHub repository. If you are using HTTPS, make sure to provide your GitHub username and password during the push.

Remember to adapt the commands based on your specific requirements and configurations.