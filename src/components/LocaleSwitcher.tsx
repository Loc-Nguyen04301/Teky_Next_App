import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className={
        isPending
          ? "relative text-gray-400 transition-opacity [&:disabled]:opacity-30 focus-visible:outline-none m-auto"
          : "relative text-gray-400 focus-visible:outline-none m-auto"
      }
    >
      <select
        className="bg-transparent p-1 focus-visible:outline-none w-[116px] max-tablet:text-xs max-tablet:w-[90px]"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["vi", "en"].map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </div>
  );
}
