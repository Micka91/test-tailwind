import Button from "@/components/UI/button/Button";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton = ({ onClick }: AddButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="p-4 bg-white shadow-lg border border-slate-100 hover:shadow-xl rounded-2xl"
    >
      <div className="flex items-center gap-3">
        <span>+</span>
        <span>Nouveau</span>
      </div>
    </Button>
  );
};

export default AddButton;
