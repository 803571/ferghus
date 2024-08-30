import chalk from "chalk";
import figlet from "figlet";
import readlineSync from "readline-sync";
import {startGame} from "./game.js";

//  게임 로비 화면을 불러옵니다.

function displayLobby() {
    console.clear();

    // 게임 타이틀의 텍스트
    console.log(
        chalk.cyan(
            figlet.textSync(`Ferghus's HAMMER`, {
                font: `Standard`,
                horizontalLayout: `default`,
                verticalLayout: `default`
            })
        )
    );

    // 상단 경계선
    const line = chalk.magentaBright('='.repeat(50));
    console.log(line);

    // 게임 이름, 여기서는 게임제목 겸 게임을 관통하는 대명사로
    console.log(chalk.white.bold('퍼거스 (Ferghus)'));
    console.log(chalk.yellowBright.bold('"대장간에 잘 왔소.'));
    

    // 설명 텍스트, 여기선 게임버전
    console.log(chalk.green('Ver. 0.1'));
    console.log();

    // 옵션들
    console.log(chalk.blue('1.') + chalk.white(' 대화를 한다.'));
    console.log(chalk.blue('2.') + chalk.white(' 거래를 한다.'));
    console.log(chalk.blue('3.') + chalk.white(' 아이템 수리.'));
    console.log(chalk.blue('4.') + chalk.white(' 아이템 개조.'));
    console.log(chalk.blue('5.') + chalk.white(' 대화를 종료한다.'));

    // 하단 경계선
    console.log(line);

    // 하단 설명
    console.log(chalk.gray('퍼거스와 무얼 할까? (1-5까지의 숫자를 입력해 행동을 선택하자.)'));
}

// 로비화면에서 유저의 입력을 받아서 처리하는 함수칸
async function handleUserInput () {
    let choice = readlineSync.question(`입력: `)
}