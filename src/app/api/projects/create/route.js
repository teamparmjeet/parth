import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/ProjectModel";

export async function POST(req) {

    await dbConnect();

    try {
        const { title, slug, content, location, projectSize, bhk, isFeatured, propertyType, possessionStatus, AvailablePlot, map, image, gallery, sitePlan, pdf, seoTitle, seoDescription } = await req.json();


        const dataUp = await ProjectModel.create({ title, slug, content, location, projectSize, bhk, isFeatured, propertyType, possessionStatus, AvailablePlot, map, image, gallery, sitePlan, pdf, seoTitle, seoDescription });



        return Response.json(
            {
                message: "Project Created Successfully!",
                success: true
            },
            {
                status: 200
            }
        )
    } catch (error) {
        return Response.json(
            {
                message: "Project Not Created",
                success: false
            },
            {
                status: 400
            }
        )
    }



}