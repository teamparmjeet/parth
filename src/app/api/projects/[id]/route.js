import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/ProjectModel";

export async function GET(req, context) {
    await dbConnect();

    try {

        const id = context.params.id;

        const data = await ProjectModel.findById(id);

        if(!data){
            return Response.json(
                {
                    message: "Data Not Found From this ID",
                    success: false
                },
                {
                    status: 404
                }
            )
        }

        return Response.json(
            {
                message: "ID got it",
                success: true,
                data
            },
            {
                status: 200
            }
        )
        
    } catch (error) {
        console.log(error);

        return Response.json(
            {
                message: "Have an Error to Get Data",
                success: false
            },
            {
                status: 400
            }
        )
    }
}