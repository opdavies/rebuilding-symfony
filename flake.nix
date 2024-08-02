{
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-22.05";

  outputs =
    { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      inherit (pkgs) mkShell nodejs;
    in
    {
      devShells.${system}.default = mkShell { buildInputs = [ nodejs ]; };

      formatter.${system} = pkgs.nixfmt-rfc-style;
    };
}
