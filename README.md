# GunBase Portfolio Project

## Frontend Pages (React + NextJS)
1. **Home Page**
   - Hero carousel: latest/popular kits
   - Quick search bar
   - Featured lines & series
   - Latest reviews snippet

2. **Kits Page**
   - List/grid view of kits
   - Filters: grade, scale, line, release year, difficulty
   - Sorting: popularity, newest, top rated
   - Kit preview card

3. **Kit Detail Page**
   - Image gallery (Cloudinary)
   - Specs table: scale, grade, release date, difficulty, line
   - Ratings & user reviews
   - Related kits
   - Add to backlog/wishlist

4. **Lines Page**
   - List of lines/franchises
   - Link kits to each line

5. **Anime Series Page**
   - Shows connected anime
   - Link kits & lines that appear in series

6. **Guides Page**
   - Step-by-step tutorials (beginner → advanced)
   - Embed images / short clips

7. **Profile / Dashboard**
   - Backlog & wishlist
   - Completed collection stats
   - User ratings & reviews

8. **Search Page**
   - Global search with filters
   - Autocomplete suggestions

9. **Links & Resources Page**
   - Categorized external links (stores, blogs, videos, tools)

10. **Admin Page (optional but impressive)**
    - CRUD for kits, lines, series, guides
    - Analytics: most viewed/popular kits

---

## Backend Modules (Supabase / Node / Prisma / TypeScript)
1. **Users**
   - Auth (JWT / Supabase Auth)
   - Profile info, backlog, wishlist, badges

2. **Kits**
   - ID, name, line, grade, scale, release date, difficulty
   - Image gallery
   - Ratings & review aggregation

3. **Lines / Franchises**
   - ID, name, description
   - Linked kits

4. **Anime Series**
   - ID, title, release year, synopsis
   - Linked kits

5. **Reviews & Ratings**
   - User, kit, rating, comment
   - Optional moderation flags

6. **Guides**
   - Title, difficulty, steps, images/videos
   - Structured JSON for frontend rendering

7. **Resources / Links**
   - URL, category, description
   - Admin CRUD

8. **Search Index**
   - Meilisearch / Algolia sync
   - Kit name, line, series, tags, guide references

9. **Notifications / Updates**
   - New kit alerts
   - Review responses
   - Optional email / push notifications

10. **Analytics & Stats (optional)**
    - Most viewed kits
    - Most popular lines / series
    - User activity tracking
