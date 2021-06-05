import Head from "next/head";
import React from "react";
import { Divider, List, Header, Form, TextArea } from "semantic-ui-react";

function about() {
  let nextjs;
  return (
    <>
      <Header>회사 소개</Header>
      <Divider />
      <List>
        <List.Item>
          <List.Icon name="users" />
          <List.Content>Semantic UI</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>New York</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="syd1215no@gmail.com">syd1215no@gmail.com</a>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="linkify" />
          <List.Content>
            <a href="http://www.semantic-ui.com">semantic-ui.com</a>
          </List.Content>
        </List.Item>
      </List>
      <Header as="h3" style={{ paddingTop: 40 }} color="teal">
        문의사항
      </Header>
      <Divider />
      <Form>
        <strong>제목</strong>
        <TextArea></TextArea>
        <strong>내용</strong>
        <TextArea></TextArea>
      </Form>
    </>
  );
}

export default about;
