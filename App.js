import { View, Text, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [like, setLike] = useState(0);
  return (
    <View style={{ marginTop: 50, alignItems: 'center', fontSize: 50 }}>
      <Text>like: {like}</Text>
      <Button
        title=' 👍'
        onPress={() => setLike(like + 1)}
      />
      <Button
        title='👎'
        onPress={() => setLike(like - 1)}
      />
    </View>
  );
} 
