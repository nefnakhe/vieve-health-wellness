# 📸 Vieve Health & Wellness — Image Upload Guide

This guide tells you exactly **which images to upload, where to put them, and what size they should be**.

---

## How to Upload Images

1. All images go inside the **`/public/`** folder in the project root.
2. The folder structure already exists — just drop your files in the right place.
3. Image file names must match **exactly** what's listed below (lowercase, hyphens, no spaces).
4. Supported formats: **`.jpg`** or **`.webp`** for photos, **`.png`** for logos and graphics.

---

## ✅ Priority 1 — Upload These First (Required for Launch)

| Image | File Path | Size | Notes |
|-------|-----------|------|-------|
| Dr. Genevieve headshot | `/public/images/team/dr-genevieve-headshot.jpg` | 600×800px | Professional photo, business or clinical attire |
| Homepage hero | `/public/images/hero/hero-main.jpg` | 1920×1080px | African/Black family or person, warm lifestyle feel |
| Logo (dark) | `/public/images/brand/vieve-logo-dark.png` | 400×120px | PNG with transparent background, for white backgrounds |
| Logo (light) | `/public/images/brand/vieve-logo-light.png` | 400×120px | White version of logo, for dark/green backgrounds |
| Favicon | `/public/favicon.ico` | 32×32px | Small Vieve logo mark or "V" icon |

---

## ✅ Priority 2 — Upload Next (High Impact)

| Image | File Path | Size | Notes |
|-------|-----------|------|-------|
| ADA conference photo | `/public/images/team/dr-genevieve-ada-conference.jpg` | 800×600px | Conference photo — badge visible is a plus |
| Community event photo | `/public/images/team/dr-genevieve-community.jpg` | 800×600px | Health fair or community outreach |
| Workshop/teaching photo | `/public/images/team/dr-genevieve-workshop.jpg` | 800×600px | Speaking or teaching, audience in background preferred |
| Clinical photo (optional) | `/public/images/team/dr-genevieve-clinical.jpg` | 800×600px | White coat photo for credibility |
| African family meal | `/public/images/community/african-family-meal.jpg` | 1200×800px | Multi-generational family at table, warm lighting |
| Wellness coaching | `/public/images/community/wellness-coaching.jpg` | 1200×800px | 1:1 coaching conversation |

---

## ✅ Priority 3 — Blog Post Images (One Per Article)

Each blog post has a feature image. Upload these to improve the blog experience.

| Article | File Path | Size |
|---------|-----------|------|
| Can You Eat Garri? | `/public/images/blog/garri-diabetes.jpg` | 1200×630px |
| 5 African Foods & Blood Sugar | `/public/images/blog/african-foods-blood-sugar.jpg` | 1200×630px |
| Is Plantain Good for Diabetes? | `/public/images/blog/plantain-diabetes.jpg` | 1200×630px |
| Healthy Nigerian Breakfast | `/public/images/blog/nigerian-breakfast.jpg` | 1200×630px |
| Diabetes Myths | `/public/images/blog/diabetes-myths.jpg` | 1200×630px |
| Understanding Carbohydrates | `/public/images/blog/carbohydrates-african-meals.jpg` | 1200×630px |
| Party Eating | `/public/images/blog/party-eating.jpg` | 1200×630px |
| Portion Control | `/public/images/blog/portion-control.jpg` | 1200×630px |
| Prediabetes | `/public/images/blog/prediabetes.jpg` | 1200×630px |

---

## ✅ Priority 4 — Community & Lifestyle Photos

| Image | File Path | Size |
|-------|-----------|------|
| Community health event | `/public/images/community/community-health-event.jpg` | 1200×800px |
| African woman health | `/public/images/community/african-woman-health.jpg` | 1200×800px |
| Healthy grocery shopping | `/public/images/community/healthy-grocery.jpg` | 1200×800px |
| Cooking healthy | `/public/images/community/cooking-healthy.jpg` | 1200×800px |

---

## ✅ Priority 5 — Educational Graphics (Can Be Designed)

These are **infographics** — you may need a designer or Canva to create them.

| Graphic | File Path | Size |
|---------|-----------|------|
| Balanced African plate | `/public/images/graphics/balanced-plate-african.png` | 800×800px |
| Portion hand guide | `/public/images/graphics/portion-hand-guide.png` | 800×600px |
| White vs brown rice | `/public/images/graphics/white-vs-brown-rice.jpg` | 800×500px |
| Blood sugar friendly foods | `/public/images/graphics/blood-sugar-friendly-foods.png` | 1000×700px |
| Diabetes myths vs facts | `/public/images/graphics/diabetes-myths-facts.png` | 800×1000px |
| African food GI chart | `/public/images/graphics/african-food-gi-chart.png` | 900×700px |

---

## 📥 PDF Downloads (for Resources Page)

Upload these PDFs to the `/public/downloads/` folder.

| Guide | File Path |
|-------|-----------|
| African Foods & Blood Sugar Guide | `/public/downloads/african-foods-blood-sugar-guide.pdf` |
| Portion Control Hand Guide | `/public/downloads/portion-control-hand-guide.pdf` |
| Diabetes-Friendly Nigerian Foods | `/public/downloads/diabetes-friendly-nigerian-foods.pdf` |
| Grocery Shopping Tips | `/public/downloads/grocery-shopping-tips.pdf` |
| Smoothie Guide | `/public/downloads/smoothie-guide-weight-management.pdf` |
| Healthy Food Swaps | `/public/downloads/healthy-food-swaps.pdf` |
| Understanding Carbohydrates | `/public/downloads/understanding-carbohydrates.pdf` |
| Balanced African Plate Guide | `/public/downloads/balanced-african-plate.pdf` |

---

## 📁 Full Folder Structure

```
public/
├── favicon.ico
├── images/
│   ├── hero/
│   │   ├── hero-main.jpg
│   │   └── hero-secondary.jpg
│   ├── team/
│   │   ├── dr-genevieve-headshot.jpg
│   │   ├── dr-genevieve-ada-conference.jpg
│   │   ├── dr-genevieve-community.jpg
│   │   ├── dr-genevieve-workshop.jpg
│   │   └── dr-genevieve-clinical.jpg
│   ├── blog/
│   │   ├── garri-diabetes.jpg
│   │   ├── african-foods-blood-sugar.jpg
│   │   ├── plantain-diabetes.jpg
│   │   ├── nigerian-breakfast.jpg
│   │   ├── diabetes-myths.jpg
│   │   ├── carbohydrates-african-meals.jpg
│   │   ├── party-eating.jpg
│   │   ├── portion-control.jpg
│   │   └── prediabetes.jpg
│   ├── community/
│   │   ├── african-family-meal.jpg
│   │   ├── community-health-event.jpg
│   │   ├── wellness-coaching.jpg
│   │   ├── african-woman-health.jpg
│   │   ├── healthy-grocery.jpg
│   │   └── cooking-healthy.jpg
│   ├── graphics/
│   │   ├── balanced-plate-african.png
│   │   ├── portion-hand-guide.png
│   │   ├── white-vs-brown-rice.jpg
│   │   ├── blood-sugar-friendly-foods.png
│   │   ├── diabetes-myths-facts.png
│   │   └── african-food-gi-chart.png
│   ├── brand/
│   │   ├── vieve-logo-dark.png
│   │   └── vieve-logo-light.png
│   └── downloads/
│       ├── african-foods-guide-cover.jpg
│       ├── portion-guide-cover.jpg
│       └── grocery-guide-cover.jpg
└── downloads/
    ├── african-foods-blood-sugar-guide.pdf
    ├── portion-control-hand-guide.pdf
    ├── diabetes-friendly-nigerian-foods.pdf
    ├── grocery-shopping-tips.pdf
    ├── smoothie-guide-weight-management.pdf
    ├── healthy-food-swaps.pdf
    ├── understanding-carbohydrates.pdf
    └── balanced-african-plate.pdf
```

---

## 💡 Image Tips

- **Avoid:** Stock photos with generic white or Asian models, clinical hospital images, cold blue-lit environments
- **Use:** Warm lighting, African and Black people, real food settings, community gatherings
- **Good sources:** Unsplash (search "African family", "Nigerian food"), Adobe Stock, Getty, or your own photos
- **Best format:** Save photos as `.jpg` at 80–85% quality for good balance of size and sharpness
- **Compression tool:** Use [Squoosh.app](https://squoosh.app) or [TinyPNG](https://tinypng.com) to compress before uploading

---

## ❓ What Happens If I Don't Upload an Image?

No problem — the site uses **colored gradient placeholders** for every image slot. The site will look complete and professional even before images are added. Upload images whenever you have them and they'll appear automatically.
