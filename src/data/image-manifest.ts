/**
 * VIEVE HEALTH & WELLNESS — IMAGE MANIFEST
 *
 * This file documents every image slot used across the website.
 * Replace placeholder paths with your actual uploaded images.
 *
 * UPLOAD INSTRUCTIONS:
 *   1. Place all images in the /public/ directory under the paths listed below.
 *   2. Recommended formats: .jpg or .webp for photos, .png for logos/graphics.
 *   3. Recommended sizes are listed per image for best performance.
 *   4. Use descriptive, lowercase, hyphenated filenames.
 */

export const imageManifest = {
  // ─────────────────────────────────────────────
  // HERO SECTION — Homepage
  // ─────────────────────────────────────────────
  hero: {
    main: {
      path: "/images/hero/hero-main.jpg",
      alt: "African woman and family enjoying a healthy meal together",
      recommended_size: "1920x1080px",
      notes:
        "Warm, lifestyle photo. African or Black family at the table. No clinical/hospital setting.",
    },
    secondary: {
      path: "/images/hero/hero-secondary.jpg",
      alt: "Healthy African meal spread with vegetables and protein",
      recommended_size: "1200x800px",
      notes: "Food photo — colorful, appetizing African meal.",
    },
  },

  // ─────────────────────────────────────────────
  // TEAM / FOUNDER SECTION
  // ─────────────────────────────────────────────
  team: {
    dr_genevieve_headshot: {
      path: "/images/team/dr-genevieve-headshot.jpg",
      alt: "Dr. Genevieve Ufongene, DNP, FNP-C — Founder of Vieve Health & Wellness",
      recommended_size: "600x800px",
      notes:
        "Professional headshot. Warm background preferred. Business or clinical attire.",
    },
    dr_genevieve_ada_conference: {
      path: "/images/team/dr-genevieve-ada-conference.jpg",
      alt: "Dr. Genevieve at the ADA Scientific Sessions conference",
      recommended_size: "800x600px",
      notes: "Conference photo — name badge visible is a plus.",
    },
    dr_genevieve_community: {
      path: "/images/team/dr-genevieve-community.jpg",
      alt: "Dr. Genevieve engaging with community members at a health event",
      recommended_size: "800x600px",
      notes: "Community health fair or outreach event photo.",
    },
    dr_genevieve_workshop: {
      path: "/images/team/dr-genevieve-workshop.jpg",
      alt: "Dr. Genevieve presenting at a diabetes education workshop",
      recommended_size: "800x600px",
      notes: "Speaking or teaching photo — audience preferred in background.",
    },
    dr_genevieve_clinical: {
      path: "/images/team/dr-genevieve-clinical.jpg",
      alt: "Dr. Genevieve in clinical setting",
      recommended_size: "800x600px",
      notes:
        "Optional — clinical coat photo for 'Work With Me' or credibility section.",
    },
  },

  // ─────────────────────────────────────────────
  // BLOG POST FEATURE IMAGES
  // ─────────────────────────────────────────────
  blog: {
    garri_diabetes: {
      path: "/images/blog/garri-diabetes.jpg",
      alt: "Garri and eba on a traditional plate — African food and diabetes education",
      recommended_size: "1200x630px",
      notes: "Photo of garri/eba. Warm, food-forward styling.",
    },
    african_foods_blood_sugar: {
      path: "/images/blog/african-foods-blood-sugar.jpg",
      alt: "Variety of West African foods — rice, plantain, yam, fufu",
      recommended_size: "1200x630px",
      notes: "Flat lay or spread of common African foods.",
    },
    plantain_diabetes: {
      path: "/images/blog/plantain-diabetes.jpg",
      alt: "Green and ripe plantain side by side",
      recommended_size: "1200x630px",
      notes: "Show both green and yellow/ripe plantain for contrast.",
    },
    nigerian_breakfast: {
      path: "/images/blog/nigerian-breakfast.jpg",
      alt: "Healthy Nigerian breakfast spread with eggs, moi moi, and vegetables",
      recommended_size: "1200x630px",
      notes: "Eggs + vegetables, moi moi, or oatmeal with African spices.",
    },
    diabetes_myths: {
      path: "/images/blog/diabetes-myths.jpg",
      alt: "African woman reading diabetes education materials",
      recommended_size: "1200x630px",
      notes: "Person reading, learning, or in a consultation setting.",
    },
    carbohydrates_african_meals: {
      path: "/images/blog/carbohydrates-african-meals.jpg",
      alt: "Balanced African meal plate with rice, vegetables, and protein",
      recommended_size: "1200x630px",
      notes: "Well-plated balanced meal featuring African foods.",
    },
    party_eating: {
      path: "/images/blog/party-eating.jpg",
      alt: "African party food spread — jollof rice, plantain, grilled chicken",
      recommended_size: "1200x630px",
      notes: "Celebration/party food setting. Warm and festive.",
    },
    portion_control: {
      path: "/images/blog/portion-control.jpg",
      alt: "Portion control plate with measured African food serving",
      recommended_size: "1200x630px",
      notes: "Well-portioned plate or hand measurement visual.",
    },
    prediabetes: {
      path: "/images/blog/prediabetes.jpg",
      alt: "Person consulting with healthcare provider about prediabetes",
      recommended_size: "1200x630px",
      notes: "Consultation or education setting. Warm and hopeful tone.",
    },
  },

  // ─────────────────────────────────────────────
  // EDUCATIONAL GRAPHICS
  // ─────────────────────────────────────────────
  graphics: {
    balanced_plate_african: {
      path: "/images/graphics/balanced-plate-african.png",
      alt: "Balanced African plate method graphic — half vegetables, quarter protein, quarter starch",
      recommended_size: "800x800px",
      notes:
        "Infographic. Create or commission: plate divided into sections with African food examples.",
    },
    portion_hand_guide: {
      path: "/images/graphics/portion-hand-guide.png",
      alt: "Portion control hand guide — visual measurement method",
      recommended_size: "800x600px",
      notes:
        "Infographic showing palm = protein, fist = carbs, thumb = fat, etc.",
    },
    white_vs_brown_rice: {
      path: "/images/graphics/white-vs-brown-rice.jpg",
      alt: "White rice vs brown rice comparison for blood sugar management",
      recommended_size: "800x500px",
      notes: "Side-by-side comparison photo or graphic.",
    },
    blood_sugar_friendly_foods: {
      path: "/images/graphics/blood-sugar-friendly-foods.png",
      alt: "Blood sugar friendly African foods chart",
      recommended_size: "1000x700px",
      notes: "Infographic of foods that support stable blood sugar.",
    },
    diabetes_myths_facts: {
      path: "/images/graphics/diabetes-myths-facts.png",
      alt: "Diabetes myths vs facts infographic",
      recommended_size: "800x1000px",
      notes: "Myths vs Facts visual — formatted for social sharing too.",
    },
    african_food_gi_chart: {
      path: "/images/graphics/african-food-gi-chart.png",
      alt: "Glycemic index chart for common African foods",
      recommended_size: "900x700px",
      notes:
        "Chart showing GI of garri, plantain, yam, rice, fufu — traffic light style.",
    },
    healthy_plate_comparison: {
      path: "/images/graphics/healthy-plate-comparison.png",
      alt: "Before and after healthy plate comparison",
      recommended_size: "1000x500px",
      notes: "Traditional high-carb plate vs. balanced African plate.",
    },
    diabetes_prevention_steps: {
      path: "/images/graphics/diabetes-prevention-steps.png",
      alt: "5 steps to prevent diabetes infographic",
      recommended_size: "800x1000px",
      notes: "Infographic. 5 numbered steps with icons.",
    },
  },

  // ─────────────────────────────────────────────
  // COMMUNITY & LIFESTYLE PHOTOS
  // ─────────────────────────────────────────────
  community: {
    african_family_meal: {
      path: "/images/community/african-family-meal.jpg",
      alt: "African family enjoying a healthy meal together at home",
      recommended_size: "1200x800px",
      notes: "Multi-generational family meal. Warm, natural lighting.",
    },
    community_health_event: {
      path: "/images/community/community-health-event.jpg",
      alt: "Community health education event with African participants",
      recommended_size: "1200x800px",
      notes:
        "Health fair, church health event, or community screening setting.",
    },
    wellness_coaching: {
      path: "/images/community/wellness-coaching.jpg",
      alt: "One-on-one wellness coaching session",
      recommended_size: "1200x800px",
      notes: "1:1 coaching conversation. Warm, empowering tone.",
    },
    african_woman_health: {
      path: "/images/community/african-woman-health.jpg",
      alt: "African woman smiling and engaged in her health journey",
      recommended_size: "1200x800px",
      notes: "Confident, empowered woman. Natural lighting. No clinical tone.",
    },
    healthy_grocery: {
      path: "/images/community/healthy-grocery.jpg",
      alt: "Person selecting fresh vegetables and healthy African groceries",
      recommended_size: "1200x800px",
      notes: "Grocery shopping or fresh market setting.",
    },
    cooking_healthy: {
      path: "/images/community/cooking-healthy.jpg",
      alt: "African woman cooking a healthy traditional meal",
      recommended_size: "1200x800px",
      notes: "Cooking scene — warm kitchen, traditional + healthy food.",
    },
  },

  // ─────────────────────────────────────────────
  // BRAND / LOGO
  // ─────────────────────────────────────────────
  brand: {
    logo_dark: {
      path: "/images/brand/vieve-logo-dark.png",
      alt: "Vieve Health & Wellness logo",
      recommended_size: "400x120px",
      notes: "Primary logo on light/white background. PNG with transparency.",
    },
    logo_light: {
      path: "/images/brand/vieve-logo-light.png",
      alt: "Vieve Health & Wellness logo — light version",
      recommended_size: "400x120px",
      notes: "White/light version for dark backgrounds and footer.",
    },
    favicon: {
      path: "/favicon.ico",
      alt: "Vieve Health & Wellness favicon",
      recommended_size: "32x32px",
      notes: "Small logo mark or V icon. Place directly in /public/.",
    },
  },

  // ─────────────────────────────────────────────
  // DOWNLOADABLE RESOURCES (PDF thumbnails)
  // ─────────────────────────────────────────────
  downloads: {
    african_foods_guide_cover: {
      path: "/images/downloads/african-foods-guide-cover.jpg",
      alt: "African Foods & Blood Sugar Guide cover image",
      recommended_size: "600x800px",
      notes: "PDF guide cover preview image for the resources page.",
    },
    portion_guide_cover: {
      path: "/images/downloads/portion-guide-cover.jpg",
      alt: "Portion Control Hand Guide cover image",
      recommended_size: "600x800px",
      notes: "PDF guide cover preview image.",
    },
    grocery_guide_cover: {
      path: "/images/downloads/grocery-guide-cover.jpg",
      alt: "Diabetes-Friendly Grocery Guide cover image",
      recommended_size: "600x800px",
      notes: "PDF guide cover preview image.",
    },
  },
};

/**
 * IMAGE MANIFEST SUMMARY
 * ═══════════════════════════════════════════════
 *
 * TOTAL IMAGE SLOTS: 40
 *
 * Priority Upload Order:
 * ──────────────────────
 * PRIORITY 1 — Must have for launch:
 *   ✦ /images/team/dr-genevieve-headshot.jpg
 *   ✦ /images/hero/hero-main.jpg
 *   ✦ /images/brand/vieve-logo-dark.png
 *   ✦ /images/brand/vieve-logo-light.png
 *
 * PRIORITY 2 — High impact:
 *   ✦ /images/team/dr-genevieve-ada-conference.jpg
 *   ✦ /images/team/dr-genevieve-community.jpg
 *   ✦ /images/team/dr-genevieve-workshop.jpg
 *   ✦ /images/community/african-family-meal.jpg
 *   ✦ /images/community/wellness-coaching.jpg
 *
 * PRIORITY 3 — Blog posts (one per post):
 *   ✦ All files under /images/blog/
 *
 * PRIORITY 4 — Educational graphics (can design):
 *   ✦ All files under /images/graphics/
 *
 * PLACEHOLDER BEHAVIOR:
 *   The site uses colored gradient placeholders until real images are uploaded.
 *   Simply upload your image at the correct path and it will automatically appear.
 *
 * ═══════════════════════════════════════════════
 */
