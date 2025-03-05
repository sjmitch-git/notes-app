import { FlatList } from "react-native";
import NoteItem from "@/components/NoteItem";

interface NoteProps {
  text: string;
  $id: string;
}

interface NoteListProps {
  notes: NoteProps[];
  onDelete: ($id: string) => void;
  onEdit: ($id: string, text: string) => void;
}

const NoteList = ({ notes, onDelete, onEdit }: NoteListProps) => {
  console.log("notes", notes);
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} onEdit={onEdit} />}
    />
  );
};

export default NoteList;
