import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AddSkill from "../../../components/Admin/AddSkill";
import LoadingScreen from "../../../components/Generic/LoadingScreen";

const GET_SKILL_BY_ID = gql`
  query Skill($skillId: ID!) {
    skill(id: $skillId) {
      id
      name
      description
      image
    }
  }
`;

export default function EditSkill() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_SKILL_BY_ID, {
    variables: { skillId: id },
  });

  if (loading) return <LoadingScreen />;

  return (
    <>
      <AddSkill data={data.skill} />
    </>
  );
}
