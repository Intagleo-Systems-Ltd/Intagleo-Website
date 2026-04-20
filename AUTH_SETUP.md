# User Authentication System Setup

## Overview
Your CMS now has a complete user authentication system with role-based access control. Users can be managed through the admin panel, with password management capabilities.

## Default Accounts

### Admin Account
- **Email:** `admin@intagleo.com`
- **Password:** `Admin@123456`
- **Permissions:** Can create, update, and delete users; manage all passwords

### Content Manager Accounts (5)
1. **Email:** `editor1@intagleo.com` | **Password:** `Editor@123456`
2. **Email:** `editor2@intagleo.com` | **Password:** `Editor@123456`
3. **Email:** `editor3@intagleo.com` | **Password:** `Editor@123456`
4. **Email:** `editor4@intagleo.com` | **Password:** `Editor@123456`
5. **Email:** `editor5@intagleo.com` | **Password:** `Editor@123456`

⚠️ **IMPORTANT:** Change these default passwords immediately!

## Access Points

### Admin Panel
- **URL:** `http://localhost:3000/admin-panel`
- **Purpose:** Manage users, create new accounts, update passwords
- **Access:** Admin account only

### CMS Editor
- **URL:** `http://localhost:3000/admin`
- **Purpose:** Edit blog posts, case studies, testimonials
- **Access:** All users

## Admin Panel Features

### Login
1. Navigate to `http://localhost:3000/admin-panel`
2. Enter your admin email and password
3. Your session is stored in browser localStorage

### User Management

#### Create New User
1. Fill in the "Create User" form (right side)
2. Enter user details:
   - **Name:** Full name
   - **Email:** Unique email address
   - **Password:** Initial password
   - **Role:** Admin or Content Manager
3. Click "Create User"

#### Update Password
1. Select user from the "Update Password" form (right side)
2. Enter new password
3. Click "Update Password"
4. The admin can reset any user's password at any time

#### View All Users
- Scroll to the "Users" table at the bottom
- See all user accounts with their roles and creation dates
- Delete users using the "Delete" button (cannot delete last admin)

## API Endpoints

### Authentication
- `POST /api/auth/login` - Login with email/password
- Returns JWT token valid for 7 days

### User Management (Admin Only)
- `GET /api/auth/users` - List all users
- `POST /api/auth/users` - Create new user
- `PUT /api/auth/users/{id}` - Update user password or name
- `DELETE /api/auth/users/{id}` - Delete user

### Authentication Headers
All user management endpoints require:
```
Authorization: Bearer <JWT_TOKEN>
```

## Password Security Best Practices

1. **Change default passwords immediately**
   - Use the admin panel to update all accounts
   - Create strong, unique passwords for each user

2. **Use strong passwords**
   - Minimum 12 characters
   - Mix of uppercase, lowercase, numbers, and special characters
   - Example: `Tr0pical!Sun#2024`

3. **Secure the JWT secret** (Environment Variable)
   - Set `JWT_SECRET` in your `.env.local`:
   ```
   JWT_SECRET=your-very-secret-key-here-change-in-production
   ```
   - In production, use a strong, random value

4. **Tokens expire after 7 days**
   - Users will need to re-login
   - To change expiration, edit `/app/api/auth/login/route.ts`

## File Locations

- **User Data:** `data/users.json` (JSON file with hashed passwords)
- **Auth Routes:** `app/api/auth/`
  - `login/route.ts` - Login endpoint
  - `users/route.ts` - User list and creation
  - `users/[id]/route.ts` - Individual user updates
- **Admin Panel:** `app/admin-panel/page.tsx`
- **Setup Script:** `scripts/init-users.js`

## Re-initializing Users

If you need to reset all users to default accounts:

```bash
node scripts/init-users.js
```

This will recreate the admin account and all 5 content managers with default passwords.

## Integrating with Decap CMS

The authentication system is ready to be integrated with Decap CMS. Currently:
- ✅ User accounts are created and managed
- ✅ Passwords can be updated by admin
- ⏳ Next: Configure Decap CMS to use custom authentication

To protect your CMS content editor:
1. Add authentication middleware to the `/admin` route
2. Redirect unauthenticated users to login
3. Use JWT tokens to verify user identity

## Troubleshooting

### Forgot Admin Password
1. Access your server directly
2. Run: `node scripts/init-users.js`
3. Use the default credentials to reset

### User Can't Login
1. Check email spelling
2. Verify password (case-sensitive)
3. Admin can reset password via admin panel

### Lost Access to Admin Panel
1. Clear browser localStorage: `localStorage.clear()`
2. Reload the page
3. Login again with credentials

## Security Considerations

1. **Development vs Production**
   - Current setup is for local development
   - In production, add:
     - HTTPS only
     - CSRF protection
     - Rate limiting on login attempts
     - Audit logging

2. **Data Storage**
   - Currently stored in `data/users.json`
   - For production, use a database (PostgreSQL, MongoDB, etc.)
   - Passwords are hashed with bcryptjs (10 salt rounds)

3. **Environment Variables**
   - Set `JWT_SECRET` in `.env.local`
   - Never commit real secrets to Git
   - Use strong, random values

## Next Steps

1. ✅ Change all default passwords
2. ✅ Set a strong JWT_SECRET environment variable
3. ⏳ Integrate authentication with Decap CMS
4. ⏳ Add session management UI
5. ⏳ Implement audit logging for user actions
