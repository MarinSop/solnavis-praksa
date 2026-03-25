interface EditorialDividerProps {
  vertical?: boolean;
}

const EditorialDivider = ({ vertical = false }: EditorialDividerProps) => {
  if (vertical) {
    return (
      <div className="w-px self-stretch shrink-0 opacity-30 bg-gradient-to-b from-transparent via-primary to-transparent" />
    );
  }

  return (
    <div className="h-px mb-32 opacity-30 bg-gradient-to-r from-transparent via-primary to-transparent" />
  );
};

export default EditorialDivider;
