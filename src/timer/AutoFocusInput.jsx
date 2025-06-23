const AutoFocusInput = () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });

  return <input ref={inputRef} placeholder="Saya langsung fokus!" />;
};
export default AutoFocusInput;

