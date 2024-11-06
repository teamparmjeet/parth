import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/model/BlogModel";

export async function GET(req, context) {
    await dbConnect();

    try {
        const id = context.params.id;

        const data = await BlogModel.findById(id);

        if (!data) {
            return Response.json({
                message: "Blog Not Found",
                success: false
            }, {
                status: 404
            })
        }

        return Response.json(
            {
                message: "Data feched!",
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
                message: "Data Not feched!",
                success: false
            },
            {
                status: 400
            }
        )
    }
}