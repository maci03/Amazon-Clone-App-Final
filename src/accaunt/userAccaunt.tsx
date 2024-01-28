import React from "react";
import styled from "styled-components";

const UserAccaunt = () => {
  return (
    <Wrapper>
      <ProfileHeader>Your Profile</ProfileHeader>
      <ContentWrapper>
        <ProfileOptions>
          <Option>Orders</Option>
          <Option>Wishlist</Option>
          <Option>Address</Option>
          <Option>SMS/MAIL</Option>
          <Option>Payment</Option>
          <Option>Password</Option>
          <Option>Security Policy</Option>
          <Option>Exit</Option>
        </ProfileOptions>
        <ProfileInfo>
          <Input type="text" placeholder="Enter Number" />
          <Input type="text" placeholder="Enter Mail" />
          <Input type="text" placeholder="Enter Name" />
          <Input type="text" placeholder="Enter Surname" />
          <Input type="text" placeholder="Enter ID" />
        </ProfileInfo>
      </ContentWrapper>
    </Wrapper>
  );
};

export default UserAccaunt;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffc107; /* Yellow */
  border: 1px solid #000;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

const ProfileHeader = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const ProfileOptions = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%; /* Adjust the width as needed */
`;

const Option = styled.li`
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #000;
  color: #000;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:last-child {
    border-bottom: none;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%; /* Adjust the width as needed */
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 80%;
  max-width: 300px;

  &:focus {
    outline: none;
    border-color: #ff5722; /* Orange */
  }
`;
