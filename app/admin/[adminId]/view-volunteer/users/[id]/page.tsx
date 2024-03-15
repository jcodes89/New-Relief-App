import { getServerSession } from "next-auth"

export default async function VolunteerUser(){
    const session = await getServerSession()
    return(
        <div>

            <div>vol user individual {session?.user.id}</div>

        </div>
    )
}