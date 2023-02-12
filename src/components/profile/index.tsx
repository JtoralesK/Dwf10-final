import { Layout } from "../layout";
import styled from "styled-components";
const SectionProfile = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #7d95a0;
`;
export function Profile() {
  return (
    <Layout>
      <SectionProfile></SectionProfile>
    </Layout>
  );
}
