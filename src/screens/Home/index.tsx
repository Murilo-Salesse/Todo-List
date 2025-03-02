import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Header } from "../../components/Header";
import { styles } from "./styles";

import { useState } from "react";
import { Item } from "../../components/Item/Index";

import plusIcon from "../../assets/plus.png";
import clipBoard from "../../assets/Clipboard.png";

export function Home() {
  const [completedTask, setCompletedTask] = useState<string[]>([]);
  const [task, setNewTask] = useState("");
  const [totalTask, setTotalTask] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  function handleParticipantAdd() {
    if (task.trim() === "") return;
    setCompletedTask((prevState) => [...prevState, task]);
    setNewTask("");

    setTotalTask((prevState) => prevState + 1);
  }

  function handleDeleteTask(taskToDelete: string) {
    setCompletedTask((prevState) =>
      prevState.filter((task) => task !== taskToDelete)
    );

    setTotalTask((prevState) => prevState - 1);
    setCompletedCount((prevState) => prevState - 1);

    if (completedTask.length < 0) {
      setCompletedCount(0);
    }
  }

  function handleToggleComplete(isChecked: boolean) {
    setCompletedCount((prevState) =>
      isChecked ? prevState + 1 : prevState - 1
    );
  }

  return (
    <>
      <Header />

      <View style={styles.container}>
        <View style={styles.wrapper_input}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6b6b6b"
            onChangeText={setNewTask}
            value={task}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText}>
              <Image source={plusIcon} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separate_content}>
          <View style={styles.wrapper_content}>
            <View style={styles.header_content}>
              <Text style={styles.title_created}>Criadas {totalTask}</Text>
              <Text style={styles.title_concluded}>
                Concluídas {completedCount}
              </Text>
            </View>
          </View>

          {completedTask.length > 0 ? (
            <FlatList
              data={completedTask}
              keyExtractor={(item) => item}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Item
                  key={item}
                  task={item}
                  onToggleComplete={handleToggleComplete}
                  onDeleteTask={() => handleDeleteTask(item)}
                />
              )}
            />
          ) : (
            <View style={styles.items}>
              <Image source={clipBoard} />
              <Text style={styles.title_item}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.subtitle_item}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
}
