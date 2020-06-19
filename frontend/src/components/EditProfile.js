import React from "react";

import { StyledEditProfile, BtnBlock } from "../styles/styled";

const EditProfile = () => {
  return (
    <div className="area">
      <StyledEditProfile>
        <form>
          <label htmlFor="">Mudar foto de perfil</label>
          <input type="file" placeholder="Mudar Avatar..." />
          <input type="text" placeholder="Mudar Name..." />
          <input type="text" placeholder="Mudar Bio..." />
          <BtnBlock type="submit" variant="lightblue" width="90%" height="4rem">
            Enviar
          </BtnBlock>
        </form>
      </StyledEditProfile>
    </div>
  );
};

export default EditProfile;
