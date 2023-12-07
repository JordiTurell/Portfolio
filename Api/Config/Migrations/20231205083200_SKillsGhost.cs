using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Config.Migrations
{
    /// <inheritdoc />
    public partial class SKillsGhost : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "ghost",
                table: "Skills",
                type: "boolean",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ghost",
                table: "Skills");
        }
    }
}
