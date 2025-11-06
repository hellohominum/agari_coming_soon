import React from 'react';
import GuidePage from '../pages/Guide.jsx';

function GuideFastaFormatsPage() {
  return (
    <GuidePage
      title="What is the difference between single-genome and multi-genome FASTA formats?"
      breadcrumbLabel="What is the difference between single-genome and multi-genome FASTA formats?"
    >
      {/* Intro */}
                    <div className="text-base leading-7 text-zinc-700">
                      <p>
                        When creating a submission, the first step is to declare how your genomic sequence data is formatted. This choice is critical as it tells the AGARI platform how to correctly link your metadata records to their corresponding sequences. The platform supports two primary formats.
                      </p>
                    </div>

                    {/* 1. Single-Genome FASTA Files */}
                    <div className="flex flex-col gap-4">
                      <h2 className="font-bold text-2xl text-zinc-950">
                        1. Single-Genome FASTA Files
                      </h2>
                      <p className="text-base leading-7 text-zinc-700">
                        This format involves using one or more separate FASTA files, where each file contains the sequence for a single genome.
                      </p>
                    </div>

                    {/* When to Use It - Single-Genome */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-xl text-zinc-950">
                        When to Use It
                      </h3>
                      <p className="text-base leading-7 text-zinc-700">
                        This approach is recommended for organisms with larger genomes, such as bacteria or parasites. Pathogens like Cholera, Klebsiella pneumoniae, and Malaria typically use this format.
                      </p>
                    </div>

                    {/* How It Works - Single-Genome */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-xl text-zinc-950">
                        How It Works
                      </h3>
                      <p className="text-base leading-7 text-zinc-700">
                        To link the metadata to the correct sequence file, your metadata TSV file must include a column named <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">sequenceFileName</code>. The value in this column for each row must exactly match the name of the corresponding FASTA file you are uploading.
                      </p>
                    </div>

                    {/* Example - Single-Genome */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-xl text-zinc-950">
                        Example
                      </h3>
                      <p className="text-base leading-7 text-zinc-700">
                        If you upload two FASTA files named <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">cholera_sample_A.fasta</code> and <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">cholera_sample_B.fasta</code>, your metadata file would look like this:
                      </p>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-zinc-300">
                          <thead className="bg-zinc-100">
                            <tr>
                              <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">isolateId</th>
                              <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">sampleId</th>
                              <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">...</th>
                              <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">sequenceFileName</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-white">
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">ISO-001</td>
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SAMP-001</td>
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">...</td>
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">cholera_sample_A.fasta</td>
                            </tr>
                            <tr className="bg-white">
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">ISO-002</td>
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SAMP-002</td>
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">...</td>
                              <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">cholera_sample_B.fasta</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* 2. Multi-Genome FASTA File */}
                    <div className="flex flex-col gap-4">
                      <h2 className="font-bold text-2xl text-zinc-950">
                        2. Multi-Genome FASTA File
                      </h2>
                      <p className="text-base leading-7 text-zinc-700">
                        This format uses a single FASTA file that contains the sequences for many different isolates.
                      </p>
                    </div>

                    {/* When to Use It - Multi-Genome */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-xl text-zinc-950">
                        When to Use It
                      </h3>
                      <p className="text-base leading-7 text-zinc-700">
                        This is common for organisms with smaller genomes, such as viruses. Pathogens like COVID-19 and Mpox often use this format.
                      </p>
                    </div>

                    {/* How It Works - Multi-Genome */}
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold text-xl text-zinc-950">
                        How It Works
                      </h3>
                      <p className="text-base leading-7 text-zinc-700">
                        To link the metadata, the header line for each sequence record in your FASTA file must start with a <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">&gt;</code> symbol followed immediately by an identifier that exactly matches the value in the <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">isolateId</code> column of your metadata TSV file. Any additional information in the FASTA header after the ID will be ignored.
                      </p>
                    </div>

                    {/* Example - Multi-Genome */}
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-xl text-zinc-950">
                        Example
                      </h3>
                      <p className="text-base leading-7 text-zinc-700">
                        If you have two isolates, <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">SARSCOV2-001</code> and <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">SARSCOV2-002</code>, your files would look like this:
                      </p>

                      <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold text-zinc-900">
                          Metadata File (e.g., <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">covid_samples.tsv</code>):
                        </p>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-zinc-300">
                            <thead className="bg-zinc-100">
                              <tr>
                                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">isolateId</th>
                                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">sampleId</th>
                                <th className="border border-zinc-300 px-4 py-2 text-left text-sm font-semibold text-zinc-900">...</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white">
                                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SARSCOV2-001</td>
                                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SAMP-A</td>
                                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">...</td>
                              </tr>
                              <tr className="bg-white">
                                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SARSCOV2-002</td>
                                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">SAMP-B</td>
                                <td className="border border-zinc-300 px-4 py-2 text-sm text-zinc-700">...</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold text-zinc-900">
                          Sequence File (e.g., <code className="bg-zinc-100 px-1 py-0.5 rounded text-sm">sequences.fasta</code>):
                        </p>
                        <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto text-sm">
      {`>SARSCOV2-001 some other info...
      ATGC...GATTACA
      >SARSCOV2-002 some other info...
      ATGC...GATTACA`}
                        </pre>
                      </div>
                    </div>
    </GuidePage>
  );
}

export default GuideFastaFormatsPage;
