import { screen } from "@testing-library/react";
import { mswServer } from "mock/mswServer";
import { HttpResponse, http } from "msw";
import { expect, test } from "vitest";
import { axe } from "vitest-axe";
import InnboksContent from "./InnboksContent";
import { antallVarslerUrl } from "./innboksUrls";
import { render } from "vitest-setup";

test("vis at det har kommet nye meldinger", async () => {
  mswServer.use(
    http.get(antallVarslerUrl, () => {
      return HttpResponse.json({
        innbokser: 4,
      });
    }),
  );

  const { container } = render(<InnboksContent language={"nb"} />);

  expect(await screen.findByText("4 nye meldinger")).toBeInTheDocument();
  expect(await axe(container)).toHaveNoViolations();
});
