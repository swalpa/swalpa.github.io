import Loading from "@/components/common/Loading";
import { getTeamMembers } from "@/services/serverActions"


const Page = async () => {
 const teamData = await getTeamMembers();

  if (!teamData) return <Loading />

  return (
    <main className="flex flex-col items-center py-5 p-2.5 lg:p-3 xl:p-5 min-h-screen">
      <div className="w-[350px] md:w-[570px] lg:w-4/5 xl:w-3/4 lg:min-w-[980px] xl:min-w-[1250px]">
        <h3 className="h2-heading">Mentors</h3>
        <div className="grid grid-cols-2 md:md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 lg:gap-3 xl:gap-5 p-2 mb-4">
          {
            teamData.filter((member) => member.category === 'mentor').map((member: teamMemberType, index: number) => (
              <div key={index} className="bg-white p-1.5 lg:p-2.5 border border-black/10 rounded-sm">
                <img loading="lazy" src={member.profileImage ? member.profileImage : "https://i.ibb.co/fYCYQQV/blank-profile-picture-973460-1280.png"} alt={member.name} draggable={false} width={300} height={300} 
                  className="rounded-[3px] object-cover w-40 h-48 md:w-48 md:h-56" />
                <p className="text-lg lg:text-xl font-semibold">{member.name}</p>
                <p className="text-xs text-black text-opacity-30 font-medium pr-1">{member.college}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-[350px] md:w-[570px] lg:w-4/5 xl:w-3/4 lg:min-w-[980px] xl:min-w-[1250px]">
        <h3 className="h2-heading">International Collaborators</h3>
        <div className="grid grid-cols-2 md:md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 lg:gap-3 xl:gap-5 p-2 mb-4">
          {
            teamData.filter((member) => member.category === 'collaborator').map((member: teamMemberType, index: number) => (
              <div key={index} className="bg-white p-1.5 lg:p-2.5 border border-black/10 rounded-sm">
                <img loading="lazy" src={member.profileImage ? member.profileImage : "https://i.ibb.co/fYCYQQV/blank-profile-picture-973460-1280.png"} alt={member.name} draggable={false} width={300} height={300} 
                  className="rounded-[3px] object-cover w-40 h-48 md:w-48 md:h-56" />
                <p className="text-lg lg:text-xl font-semibold">{member.name}</p>
                <p className="text-xs text-black text-opacity-30 font-medium pr-1">{member.college}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="w-[350px] md:w-[570px] lg:w-4/5 xl:w-3/4 lg:min-w-[980px] xl:min-w-[1250px]">
        <h3 className="h2-heading">Students</h3>
        <div className="grid grid-cols-2 md:md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 lg:gap-3 xl:gap-5 p-2 mb-4">
          {
            teamData.filter((member) => member.category === 'student').map((member: teamMemberType, index: number) => (
              <div key={index} className="bg-white p-1.5 lg:p-2.5 border border-black/10 rounded-sm">
                <img loading="lazy" src={member.profileImage ? member.profileImage : "https://i.ibb.co/fYCYQQV/blank-profile-picture-973460-1280.png"} alt={member.name} draggable={false} width={300} height={300} 
                  className="rounded-[3px] object-cover w-40 h-48 md:w-48 md:h-56" />
                <p className="text-lg lg:text-xl font-semibold">{member.name}</p>
                <p className="text-xs text-black text-opacity-30 font-medium pr-1">{member.college}</p>
              </div>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Page