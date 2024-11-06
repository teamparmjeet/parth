import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
    {
        title: {
            type: String,
            required: true, // Title is required
            trim: true
        },
        slug: {
            type: String,
            required: true, // Slug is required for dynamic routing
            unique: true, // Ensures slugs are unique
            trim: true
        },
        content: {
            type: String, // Rich text content stored as a string (HTML)
            required: true
        },
        location: {
            type: String,
            required: true
        },
        projectSize: {
            type: String
        },
        bhk: {
            type: String
        },
        isFeatured: {
            type: Boolean,
            required: true,
            default: false
        },
        propertyType: {
            type: String 
        },
        possessionStatus: {
            type: String
        },
        AvailablePlot: {
            type: String
        },
        map: {
            type: String
        },
        image: {
            type: String,
            default: null
        },
        gallery: {
            type: [String],
            default: []
        },
        sitePlan: {
            type: String,
            default: null
        },
        pdf: {
            type: String, // URL of the PDF (optional)
            default: null
        },
        seoTitle: {
            type: String, // SEO title (optional)
            trim: true
        },
        seoDescription: {
            type: String, // SEO description (optional)
            trim: true
        },
        defaultValue: {
            type: String,
            default: "project"
        }
    },
    { timestamps: true }
);

const ProjectModel = mongoose.models.project || mongoose.model("project", ProjectSchema);

export default ProjectModel;
