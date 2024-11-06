import dbConnect from "@/lib/dbConnect";
import ProjectCategoryModel from "@/model/ProjectCategoryModel";

export async function PATCH(req) {
    await dbConnect();

    try {
        const data = await req.json();

        const categoryData = await ProjectCategoryModel.findById(data.id);

        if(!categoryData){
            return Response.json(
                {
                    message: "Category Not Found to Update Data!",
                    success: false
                },
                {
                    status: 404
                }
            )
        }
    } catch (error) {

    }
}