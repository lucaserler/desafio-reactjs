import { useState, useEffect } from "react";
import Modal from "react-modal";
import { Button, Image, Card } from "semantic-ui-react";

import Footer from "../../components/Fooder/footer";
import AxiosInstance from "../../API/axiosInstance";
import "./home.css";
import Header from "../../components/Header/header";

Modal.setAppElement("#root");

function Home() {
  const [modalOpen, setOpen] = useState(false);

  function handleOpenModal() {
    setOpen(true);
  }

  function handleCloseModal() {
    setOpen(false);
  }

  const customModal = {
    content: {
      top: "50%",
      botton: "auto",
      right: "auto",
      left: "50%",
      background: "rgb(27, 27, 44)",
      color: "rgb(218, 218, 218)",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [skilldada, setSkilldada] = useState([]);
  useEffect(() => {
    AxiosInstance.get(`/api/userSkills`).then((response) => {
      setSkilldada(response.data);
    });
  }, []);

  const onDelete = (id) => {
    AxiosInstance.delete(`/api/userSkills${id}`).then(() => {
      getData();
    });
  };
  const getData = () => {
    AxiosInstance.get(`/api/userSkills`).then((getData) => {
      setSkilldada(getData.data);
    });
  };

  return (
    <>
      <Header />
      <div className="home">
        <div className="addSkill">
          <a className="button-home" onClick={handleOpenModal}>
            Adicionar Skill
          </a>
        </div>
        <div className="cards">
          <Card.Group>
            {skilldada.map((data) => {
              return (
                <Card>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src="/images/avatar/large/steve.jpg"
                    />
                    <Card.Header>User:{data.user}</Card.Header>
                    <Card.Meta>Skill:{data.skill}</Card.Meta>
                    <Card.Description>Criado:{data.createdAt}</Card.Description>
                    <Card.Description>
                      Level:{data.knowledgeLevel}
                    </Card.Description>
                  </Card.Content>

                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        {" "}
                        Editar{" "}
                      </Button>
                      <Button onClick={() => onDelete(data.id)}>
                        {" "}
                        Excluir{" "}
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </div>
        <Modal
          isOpen={modalOpen}
          onRequestClose={handleCloseModal}
          style={customModal}
        >
          <h1>Adicionar Skill</h1>
          <div className="modal-home">
            <a className="button-home">Salvar</a>
          </div>
          <a className="button-home" onClick={handleCloseModal}>
            {" "}
            Sair{" "}
          </a>
        </Modal>
      </div>
    </>
  );
}

export default Home;

{
  /*      <Table className='tabela-skill' striped bordered hover size="sm">
            {skilldada.map((data) => {
                return (
            <>
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Email</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.usuario}</td>
                        <td>{data.email}</td>
                        <td><button onClick={() => onDelete(data.id)}>Delete</button></td>
                    </tr>
                </tbody>
            </>
            )})}
        </Table>*/
}
