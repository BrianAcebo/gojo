import clsx from 'clsx';

export function Input({className = '', type, variant, ...props}) {
  const variants = {
    search:
      'bg-transparent px-0 py-2 text-heading w-full focus:ring-0 border-x-0 border-t-0 transition border-black border-2 border-primary/10 focus:border-primary/90',
    minisearch:
      'bg-transparent hidden md:inline-block text-left border-black opacity-40 border-[1px] rounded-full transition -mb-px appearance-none px-0 py-1 focus:ring-transparent indent-4 placeholder:opacity-40 placeholder:text-inherit',
  };

  const styles = clsx(variants[variant], className);

  return <input type={type} {...props} className={styles} />;
}
