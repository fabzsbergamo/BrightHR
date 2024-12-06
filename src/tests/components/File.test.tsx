import { render, screen } from "@testing-library/react";
import { it, describe, expect} from "vitest";

import { File as FileProps } from "../../types"
import File from "../../components/File/File"

describe("File Component", () => {

  const fileProps: FileProps = {
    type: "pdf",
    name: "Sample",
    added: "2024-12-01",
  };

  it("renders the File component with correct details", () => {
    render(<File {...fileProps} />);
    expect(screen.getByText("Sample.pdf")).toBeInTheDocument();
    expect(screen.getByText("2024-12-01")).toBeInTheDocument();
  });
});