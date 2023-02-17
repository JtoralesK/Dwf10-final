import { UpdateProfile } from "./updateProfile";
import { me } from "@/hooks/me";
import { SectionProfile } from "./profileSection";
import { useState } from "react";
import { updatePerfil } from "@/lib/api";
import { mutate } from "swr";
export function Profile() {
  const [page, setPage] = useState(false);
  const { resp: data } = me();
  const change = () => {
    setPage(!page);
  };
  const update = (e: any) => {
    updatePerfil(e.nombre, e.address).then(() => {
      mutate("/me");
    });
  };
  if (data) {
    const toUpdate = data.nombre == null || data.address == null;
    if (toUpdate) {
      return (
        <UpdateProfile
          onSubmit={(e) => {
            update(e);
          }}
          changeSection={change}
          must={false}
        />
      );
    }
  }
  if (!data) return <div>loading</div>;
  if (page)
    return (
      <UpdateProfile
        onSubmit={(e) => {
          update(e);
        }}
        changeSection={change}
        must={true}
      />
    );

  return <SectionProfile changeSection={change}></SectionProfile>;
}
