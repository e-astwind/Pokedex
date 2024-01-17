import { TouchableOpacity } from "react-native";
import React from "react";

export default function IconButton({ icon, name, onPress, size, color }) {
  let Icon = icon;
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}
