import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import trash from "../../assets/trash.png";

export function Item({
  task,
  onToggleComplete,
  onDeleteTask,
}: {
  task: string;
  onToggleComplete: (isChecked: boolean) => void;
  onDeleteTask: () => void;
}) {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggle() {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onToggleComplete(newCheckedState);
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.checkbox, isChecked && styles.checkboxActive]}
          onPress={handleToggle}
          activeOpacity={0.7}
        >
          {isChecked && <Text style={styles.checkmark}>✔</Text>}
        </TouchableOpacity>

        <Text style={[styles.text, isChecked && styles.finished]}>{task}</Text>

        <TouchableOpacity onPress={onDeleteTask}>
          <Image source={trash} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
