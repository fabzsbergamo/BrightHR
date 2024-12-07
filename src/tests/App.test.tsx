import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App";
import { FileData } from "../types";

describe("App Component", () => {
  const mockData: FileData = [
    { name: "Report", type: "pdf", added: "2024-12-01" },
    { name: "Summary", type: "doc", added: "2024-12-02" },
    { name: "Budget", type: "csv", added: "2024-12-03" },
    {
      name: "Projects",
      type: "folder",
      files: [
        { name: "Project1", type: "mov", added: "2024-12-04" },
        { name: "Project2", type: "pdf", added: "2024-12-05" },
      ],
    },
  ];

  it("renders files and folders", () => {
    render(<App data={mockData} />);
    expect(screen.getByText("Report.pdf")).toBeInTheDocument();
    expect(screen.getByText("Summary.doc")).toBeInTheDocument();
    expect(screen.getByText("Budget.csv")).toBeInTheDocument();
    expect(screen.getByText("Projects.folder")).toBeInTheDocument();
  });

});