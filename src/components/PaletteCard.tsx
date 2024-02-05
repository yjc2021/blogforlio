interface Props {
  backgroundColor: string;
}
const PaletteCard = ({ backgroundColor }: Props) => {
  return (
    <div
      className={`h-16 w-32 rounded-md border-2 border-solid border-border ${backgroundColor} text-lg font-bold text-copy-primary`}
    >
      {backgroundColor}
    </div>
  );
};

export default PaletteCard;
